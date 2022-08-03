#pragma warning (disable : 4996)
#include <stdio.h>
#include <string.h>
#include <stdlib.h>

int main()
{
    int n,  x;
    scanf("%d %d", &n, &x);

    int* a = malloc(sizeof(int) * n);
    for (int i = 0; i < n; i++) {
        int y;
        scanf("%d", &y);
        a[i] = y;
    }

    for (int i = 0; i < n; i++) {
        if (x > a[i]) {
            printf("%d ", a[i]);
        }
    }

    free(a);

    return 0;
}
