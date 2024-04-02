n = 0
while True:
    if n % 2 != 0:
        n = n + 1
        continue
    print(f"O último valor de n é {n}")
    n = n + 1
    if n > 100:
        break