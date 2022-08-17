#include <bits/stdc++.h>
using namespace std;
int x, y, z;

int main(void){
	std::ios::sync_with_stdio(0);
	std::cin.tie(0);
	
	cin >> x >> y >> z;
	
	if(x == y && x == z){
		cout<< 10000 + x * 1000;
	}else if( x == y || x == z ){
		cout << 1000 + x * 100;
	}else if(y == z){
		cout << 1000 + y * 100;
	}else {
		int result = x > y ? x : y;
		result = result > z ? result : z;
		cout << result * 100;
	}
}