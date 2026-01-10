import java.util.Scanner;
import java.util.HashMap;

public class TwoSum2 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter the size of the array : ");
        int size = scanner.nextInt();

        int[] array1 = new int[size];

        for (int i = 0;i < size;i++) {
            System.out.printf("Enter the %dth element of the array : ",i + 1);
            array1[i] = scanner.nextInt();
        }

        System.out.print("Enter the target element : ");
        int target = scanner.nextInt();

        int[] result = Twosum(array1,target);   // Method name is not TwoSum, but it is instead Twosum

        if (result == null) {
            System.out.println("No two array elements add upto the target element(" + target + ")");
        } else {
            System.out.printf("Indices of the array elements which add up to %d are : %d and %d \n",target,result[0] + 1,result[1] + 1);
        }

        scanner.close();
    }

    public static int[] Twosum(int[] arr1,int target) {
        HashMap<Integer,Integer> map = new HashMap<>();

        for (int i = 0;i < arr1.length;i++) {
            int complement = target - arr1[i];

            if (map.containsKey(complement)) {
                return new int[]{map.get(complement),i};
            } else {
                map.put(arr1[i],i);
            }
        }

        return null;
    }
}