def main():
    size = int(input("Enter the size of the list : "))
    array1 = []

    for i in range(size):
        a = int(input(f"Enter the {i}th element of the list : "))
        array1.append(a)

    target = int(input("Enter the target element : "))

    result = TwoSum(array1,target)

    if result == -1:
        print("No two elements add up to the target")
    else:
        print(f"The indices of the two elements which add upto {target} are : {result[0]} and {result[1]}")

def TwoSum(arr1 : list[int],target : int) -> list[int]:
    for i in range(len(arr1) - 1) :
        for j in range(i + 1,len(arr1)) :
            if arr1[j] == target - arr1[i] :
                return [i + 1,j + 1]
    
    return -1

if __name__ == "__main__":
    main()
