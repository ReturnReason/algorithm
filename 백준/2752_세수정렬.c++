#include <bits/stdc++.h>
using namespace std;
int x[10];

int main(void){
	std::ios::sync_with_stdio(0);
	std::cin.tie(0);
	
	for(int i = 0; i < 3; i++){
		cin >> x[i];
		
	}
	
	sort(x, x+3);
	
	for(int i = 0; i < 3; i++){
		cout << x[i] << " ";
	}
	
}