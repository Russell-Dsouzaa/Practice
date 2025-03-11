#include <stdio.h>
#include <stdlib.h>

int RomanToInteger(char* str) {
    int map[128] = {0};
    map['I'] = 1;    // using double quotes raises errors, since the maps only accept characters instead of strings
    map['V'] = 5;
    map['X'] = 10;
    map['L'] = 50;
    map['C'] = 100;
    map['D'] = 500;
    map['M'] = 1000;

    int result = 0;

    for (int i = 0;i < sizeof(str) - 1;i++) {
        if (map[str[i]] < map[str[i + 1]]) {
            result = result - map[str[i]];
        } else {
            result = result + map[str[i]];
        }
    }

    return result + map[str[sizeof(str) - 1]];
}

int main() {
    char s[30];

    printf("Enter the Roman Numeral : ");
    scanf("%s",s);

    char sUpper[30];
    for (int i = 0;s[i] != '\0';i++)
    {
        if (s[i] >= 'a' && s[i] <= 'z')
        {
            sUpper[i] = s[i] - 32;
        }
    }

    int result = RomanToInteger(sUpper);

    printf("The equivalent of the Roman Numeral(%s) is %d\n",s,result);

    return 0;
}