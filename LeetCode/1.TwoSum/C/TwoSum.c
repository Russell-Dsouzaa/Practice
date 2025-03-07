// Began at around 2:30 at night.
// Stopped at 3:30(I'm tired, also programming in C, from ground-up is time-consuming :( ).

#include <stdio.h>
#include <stdlib.h>

int* twoSum(int* nums, int numsSize, int target, int* returnSize) {

    int* result = (int*)malloc(sizeof(int) * 2);
    *returnSize = 0;

    for (int i = 0;i < numsSize - 1;i++)
    {
        for (int j = i + 1;j < numsSize;j++)
        {
            if (nums[j] == target - nums[i])
            {
                result[0] = i;
                result[1] = j;
                *returnSize = 2;
                return result;
            }
        }
    }

    free(result);  // we free this if incase no solution is found
    return NULL;  // here, we couldn't return -1 since the return type of this function is int*, that is, a pointer.
}

int main()
{
    int size,target,returnSize;
    do
    {
        printf("Enter the size of the Array : ");
        scanf("%d",&size);
    } while (size < 2);  // apparently, out of all the loops in C, just the do-while loop ends with a semi-colon. Also, the min-length is 2 because it's given in the problem's constraints

    int* array1 = (int*)malloc(sizeof(int) * size);
    
    for (int i = 0;i < size;i++)
    {
        printf("Enter the %dth element of the array : ",i + 1);
        scanf("%d",&array1[i]);
    }

        printf("Enter the target element : ");
        scanf("%d",&target);

    int* result = twoSum(array1,size,target,&returnSize);

    if (returnSize != 2)
    {
        printf("The array does not contain two elements that sum up to the target :(\n");  // we used \n newline character so that the cmd line appears on the next line, otherwise it appears on the same line at the end.
    } else
    {
        printf("The indices of the elements of the array elements which add up to the target(%d) element are: %d and %d \n",target,result[0],result[1]);  // we used \n newline character so that the cmd line appears on the next line, otherwise it appears on the same line at the end.
        free(result);
    }

    free(array1);
    return 0;
}

/*
    I initially had a conditional statement at the end of the end of the do-while loop at lOC 37 `while (size < 2 || typeof(size) != int)`,
    but then I realized that I need not check the type of 'size' variable since that job is done by 'scanf' function. 
    I had also wrapped LOCs 43 and 44 in do-while (type != int); but then later I rectified it but removing it.
*/