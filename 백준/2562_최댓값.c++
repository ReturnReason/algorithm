#include <bits/stdc++.h>
using namespace std;

int main () {
	int max = 0;
	int idx = 0;
	int n;
	
	for(int i = 1; i <= 9; i++){
		cin >> n;
		if(max < n ){
			max = n;
			idx = i;
		}
	}
	
	cout << max << "\n" << idx << "\n";
	
	return 0;
}