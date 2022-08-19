#include <bits/stdc++.h>
using namespace std;

int change(int n){
	int count = 0;
	
	while(n >= 10){
		if(n >= 500){
			n -= 500;
			count++;
			continue;
		}else if(n >= 100){
			n -= 100;
			count++;
			continue;
		}else if(n >= 50){
			n -= 50;
			count++;
			continue;	
		}else if(n >= 10){
			n -= 10;
			count++;
			continue;
		}
	}
	
	return count;
}

int main(){
	std::ios::sync_with_stdio(0);
	std::cin.tie(0);
	
	int a = change(1260);
	cout << a << "\n";
	
	return 0;
}