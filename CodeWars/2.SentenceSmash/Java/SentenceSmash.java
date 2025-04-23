import java.util.Scanner;

public class SentenceSmash {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Ente the size of the String array : ");;
        int size = scanner.nextInt();

        scanner.nextLine();  // we put this here, so that words[0] does not store blank(enter button) when we enter 5(size) and then press enter. Without this LOC, words[0] would store an empty string.

        String[] words = new String[size];

        for (int i = 0;i < size; i++) {
            System.out.printf("Enter the %dth element of the array : ",i + 1);
            words[i] = scanner.nextLine();
        }

        String result = Smash(words);

        System.out.println(result);

        scanner.close();
    }

    public static String Smash(String[] words) {
        return String.join(" ",words);

        /*
        
        alternative method :-
            String resutl = "";

            for (String s : words) {
                result = result + " " + s;
            }

            return result.trim();

        */
    }
}