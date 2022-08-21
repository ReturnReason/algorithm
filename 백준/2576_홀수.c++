#include <bits/stdc++.h>
using namespace std;

int main(){
	
	int n;
	int min = 100;
	int sum = 0;
	
	for(int i = 0; i < 7; i++){
		cin >> n;
		if(n % 2 != 0){
			sum += n;
			
			if(min > n){
				min = n;
			}
		}
	}
	
	if(sum != 0){
		cout << sum << "\n" << min;
	}else {
		cout << -1 << "\n";
	}

	return 0;
}