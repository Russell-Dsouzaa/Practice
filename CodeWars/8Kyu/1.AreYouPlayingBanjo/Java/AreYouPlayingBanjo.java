import java.util.Scanner;

public class AreYouPlayingBanjo {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter your name : ");
        String s = scanner.nextLine();

        System.out.println(PlaysBanjo(s));

        scanner.close();
    }

    public static String PlaysBanjo(String name) {
        char firstChar = name.charAt(0);
        char LowerCaseCharacter = Character.toLowerCase(firstChar);

        if (LowerCaseCharacter == 'r') {
            return name + " plays banjo";
        } else {
            return name + " does not play banjo";
        }
    }
}