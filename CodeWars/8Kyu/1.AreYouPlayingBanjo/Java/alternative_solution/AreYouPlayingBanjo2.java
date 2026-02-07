import java.util.Scanner;

public class AreYouPlayingBanjo2 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter your name : ");
        String s = scanner.nextLine();

        System.out.println(PlaysBanjo(s));

        scanner.close();
    }

    public static String PlaysBanjo(String name) {
        String name1 = name.toUpperCase();    // We could directly use 'name.toUpperCase().startsWith("R")' in the if statement

        if (name1.startsWith("R")) {    // we have to use double quotes here, since startsWith() method expects a string, not a character
            return name + " plays banjo";
        } else {
            return name + " does not play banjo";
        }
    }
}