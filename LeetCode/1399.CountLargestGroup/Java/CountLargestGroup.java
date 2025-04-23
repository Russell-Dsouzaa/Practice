import java.util.*;

public class CountLargestGroup {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.println("Enter a Number :");
        int n = scanner.nextInt();

        int result = CLG(n);
        
        System.out.println("Result : " + result);

        scanner.close();
    }

    public static int CLG(int number1) {
        HashMap<Integer,Integer> count = new HashMap<>();
        int result = 0;

        for (int i = 1;i <= number1;i++) {
            int tempSum = 0;
            int temp = i;                          // We need to make a copy of i and then mutate it, because directly mutating the value of i makes the loop run longer or sometimes indefinitely since the loop's consitional relies on i's value

            while (temp != 0) {                    // We calculate the sum of the digits of i'th number
                tempSum += temp % 10;
                temp = temp / 10;
            }

            if (count.containsKey(tempSum)) {
                count.put(tempSum,count.get(tempSum) + 1);
            } else {
                count.put(tempSum,1);
            }
        }

        int maxCount = Collections.max(count.values());    // We find the max value in the 'count' HashMap

        for (int a : count.values()) {
            if (a == maxCount) {                           // we count the number of times highest frequency appears in the 'count' object
                result++;
            }
        }

        return result;
    }
}


/* My idea was to run a for loop iterating from 1 to n, and for each of these values, we calculate the sum of their digits. We then populate the 'count' object
with the sums and their frequencies. After we have key-value pairs of sums and their frequencies, we find the highest frequency in 'count'. After doing that, we 
check how many times the highest frequency is repeated in the 'count' object. EZ I solved it on my own btw(i had to refer to stack overflow on how to iterate the values of an object tho) */