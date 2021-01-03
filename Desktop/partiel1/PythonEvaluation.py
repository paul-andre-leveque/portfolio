dimension= int(input("Merci d'inclure une dimension : "))
letter = str(input("Merci d'inclure une lettre : "))
for x in range(dimension):
    for y in range(dimension):
        if (x + y) % 2:
           print(' ', end='')
        else:
           print(letter, end='')
    print()