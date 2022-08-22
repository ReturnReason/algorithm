#include <bits/stdc++.h>
using namespace std;

int num[5] = {0, };
int mid = 0;
int avg = 0;

int main(){
	ios::sync_with_stdio(0);
	cin.tie(0);
	
	for(int i = 0; i<sizeof(num)/sizeof(num[0]); i++){
		cin >> num[i];
		avg += num[i];
	}
	
	sort(num, num + 5);
	int minIdx = (sizeof(num)/sizeof(num[0])) / 2;
	mid = num[minIdx];
	
	cout << avg / 5 << "\n";
	cout << mid << "\n";
	
	return 0;
}
