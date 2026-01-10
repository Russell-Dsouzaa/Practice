import java.util.Scanner;

public class TwoSum {
    public static void main (String[] args) {

        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter the size of the Integer array : ");
        int size = scanner.nextInt();

        int[] array1 = new int[size];

        for (int i = 0;i < size;i++) {
            System.out.printf("Enter the %dth element of the array : ",i + 1);
            array1[i] = scanner.nextInt();
        }

        System.out.print("Enter the target element : ");
        int target = scanner.nextInt();

        int[] result = Twosum(array1,target);

        if (result == null) {
            System.out.println("No two pairs of array elements add up the target element(" + target + ")");
        } else {
            System.out.printf("The indices of the array elements which add upto %d are : %d and %d\n",target,result[0] + 1,result[1] + 1);
        }

        scanner.close();
    }

    public static int[] Twosum(int[] arr1,int target) {
        for (int i = 0;i < arr1.length - 1;i++) {
            for (int j = i + 1;j < arr1.length;j++) {
                if (arr1[j] == target - arr1[i]) {
                    return new int[] {i,j};
                }
            }
        }

        return null;
    }
}