from typing import *

def main() -> None :
    size : int = int(input("Enter the size of the array : "))
    array1 : List[int] = []

    for i in range(size) :
        array1.append(int(input(f"Enter the {i + 1}th element of the array : ")))
    
    target : int = int(input("Enter the target element : "))

    result : List[int] | None = TwoSum(array1,target)

    if result == None :
        print(f"No two array elements add up to {target}")
    else :
        print(f"Indices which add up {target} are : {result[0] + 1} and {result[1] + 1}")

def TwoSum(arr1 : List[int],target : int) -> List[int] | None :
    if len(arr1) < 2 :
        return None
    
    map : Dict[int,int] = {}
    
    for i in range(len(arr1)) :
        if target - arr1[i] in map :   # in JS, if (map[target - arr1[i]]) {} works as intended. Sadly :( it doesn't work in python, instead it raises an error
            return [map[target - arr1[i]],i]
        else :
            map[arr1[i]] = i

if __name__ == '__main__' :
    main()