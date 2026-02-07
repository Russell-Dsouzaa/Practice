def main():
    size = int(input("Enter the size of the array : "))
    words = []

    for i in range(size):
        a = input(f"Enter the {i + 1}th element of the array : ")
        words.append(a)

    result = Smash(words)

    print(result)
    
def Smash(words : str) -> str:
    result = ""

    for i in words:
        result = result + " " + i

    return result

if __name__ == '__main__':
    main()