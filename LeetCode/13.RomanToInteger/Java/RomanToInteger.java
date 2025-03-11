import java.util.Scanner;
import java.util.HashMap;

public class RomanToInteger {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter the Roman Numeral : ");
        String s = scanner.nextLine();

        int result = RIConverter(s.toUpperCase());

        System.out.printf("The Decimal equivalent of the entered Roman Numeral(%s) is : %d\n",s,result);

        scanner.close();
    }

    public static int RIConverter(String s) {
        int result = 0;

        HashMap<Character,Integer> RtoI = new HashMap<>();
        RtoI.put('I',1);
        RtoI.put('V',5);
        RtoI.put('X',10);
        RtoI.put('L',50);
        RtoI.put('C',100);
        RtoI.put('D',500);
        RtoI.put('M',1000);

        for (int i = 0;i < s.length() - 1;i++) {
            if (RtoI.get(s.charAt(i)) < RtoI.get(s.charAt(i + 1))) {
                result = result - RtoI.get(s.charAt(i));
            } else {
                result = result + RtoI.get(s.charAt(i));
            }
        }

        return result + RtoI.get(s.charAt(s.length() - 1));
    }
}