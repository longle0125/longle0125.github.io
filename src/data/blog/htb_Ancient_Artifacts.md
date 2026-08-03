---
author: vinjr
pubDatetime: 2026-07-31T14:51:19+07:00
modDatetime: 2026-07-31T14:51:19+07:00
title: "Cyber Apocalypse CTF 2026 Write-up"
tags:
  - Cryptography
  - CTF
featured: false
description: "Write-ups for some cryptography challenges from Cyber Apocalypse CTF 2026."
---

## Ancient Artifacts
server.py
```python
import zlib
import functools
import secrets
import signal

signal.alarm(30)
def apply_rune(rune, *nums):
    return rune("".join(str(num) for num in nums).encode())

num = secrets.randbits(128)
h = apply_rune(zlib.adler32, num)

my_salt = secrets.randbits(128)
your_salt = int(input("your salt: "))
assert your_salt.bit_length() >= 128
salted = apply_rune(zlib.adler32, my_salt, num, your_salt)
print(f"{my_salt = }")
print(f"{salted = }")


MENU = '''Options:
1. Give number
2. Stop
3. Exit
'''

nums = []
while True:
    try:
        option = int(input(MENU))
        if option == 2:
            break
        elif option == 1:
            your_num = int(input("n: "))
            assert your_num not in nums
            assert apply_rune(zlib.adler32, your_num) == h
            nums.append(your_num)
        else:
            exit("bye")
    except:
        exit("bye")

assert apply_rune(zlib.crc32, *nums) == h
assert functools.reduce(lambda a, b: a ^ b, [apply_rune(zlib.crc32, num) for num in nums]) == h
print(b'HTB{????????????????????????}')
```
This challenge using two different [checksum](https://en.wikipedia.org/wiki/Checksum) algorithm, **adler32** and **crc32**. Unlike cryptographic hash functions, these 32-bit checksums were designed to detect accidental errors, not resist deliberate manipulation. Their small output size and algebraic structure allow us to efficiently construct collisions and satisfy the checksum constraints.

Here are examples of how they works:

```python
def simple_adler32(data: bytes) -> int:
    modulus = 65521
    a = 1
    b = 0

    for byte in data:
        a = (a + byte) % modulus
        b = (b + a) % modulus

    return (b << 16) | a
```


```python
def simple_crc32(data: bytes) -> int:
    crc = 0xFFFFFFFF
    polynomial = 0xEDB88320

    for byte in data:
        crc ^= byte

        for _ in range(8):
            if crc & 1:
                crc = (crc >> 1) ^ polynomial
            else:
                crc >>= 1

    return crc ^ 0xFFFFFFFF
```

We could see the challenge as two different parts, the first part is to recover $h$, and the second is to find a collision between **adler32** and **crc32**




**flag**: HTB{zl1b_func710n5_r34lly_5houldn7_b3_us3d_1n_cryp70!}