#include <stdio.h>
#include <stdlib.h>
#include <ctype.h>    // required for map[128]

int* TwoSum(int* arr1,int target);

int main()
{
    int size,target;

    printf("Enter the size of the array : ");
    scanf("%d",&size);

    int* array1 = (int*)malloc(sizeof(int) * size);

    for (int i = 0;i < size;i++)
    {
        printf("Enter the %dth element of the array : ",i + 1);
        scanf("%d",&array1[i]);
    }

    printf("Enter the target element : ");
    scanf("%d",&target);

    int* result = TwoSum(array1,target);

    if (result == NULL)
    {
        printf("No two array elements add up to %d \n",target);
    }
    else
    {
        printf("Indices of the array elements which add up to %d are : %d and %d \n",target,result[0] + 1,result[1] + 1);
    }

    return 0;
}

int* TwoSum(int* arr1,int target)
{
    int* result = (int*)malloc(sizeof(int) * 2);

    int map[128] = {};

    for (int i = 0;i < sizeof(arr1);i++)
    {
        int complement = target - arr1[i];

        if (map[complement])
        {
            result[0] = map[complement];
            result[1] = i;
            return result;
        }
        else
        {
            map[arr1[i]] = i;
        }
    }

    return NULL;
}