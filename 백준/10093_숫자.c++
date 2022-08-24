#include <bits/stdc++.h>
using namespace std;

int main () {
	long long a, b;
	cin >> a >> b;
	if(a > b) swap(a, b);
	long long cnt = 0;
	
	for(long long i = a + 1; i <b; i++){
		cnt++;
	}
	
	cout << cnt << "\n";
	
	for(long long i = cnt; i > 0; i--){
		cout << b - i << " ";
	}
	
	return 0;
}