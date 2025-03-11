def main():
    s = input("Enter the Roman Numeral : ")

    result = RomanToInteger(s.upper())

    print(f"The Decimal equivalent for the entered roman numeral({s}) is {result}")

def RomanToInteger(str):
    result = 0

    RtoI = {
        'I' : 1,
        'V' : 5,
        'X' :10,
        'L' : 50,
        'C' : 100,
        'D' : 500,
        'M' : 1000
    }

    for i in range(len(str) - 1):
        if RtoI[str[i]] < RtoI[str[i + 1]]:
            result = result - RtoI[str[i]]
        else:
            result = result + RtoI[str[i]]

    return result + RtoI[str[len(str) - 1]]

if __name__ == '__main__':
    main()