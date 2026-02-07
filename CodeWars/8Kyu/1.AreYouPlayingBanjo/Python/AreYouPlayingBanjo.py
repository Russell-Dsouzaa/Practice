def main():
    s = input("Enter your name : ")

    result = PlaysBanjo(s)
    print(result)

def PlaysBanjo(name : str) -> str:
    if name[0].lower() == "r" :
        return name + " plays banjo"
    else :
        return name + " does not play banjo"

if __name__ == '__main__':
    main()