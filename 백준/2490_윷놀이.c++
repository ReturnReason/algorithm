#include <bits/stdc++.h>
using namespace std;
int a[4];
int o, x;

int main(void){
	std::ios::sync_with_stdio(0);
	std::cin.tie(0);
	
	for (int i = 0; i <3; i++){
		o = 0, x = 0;
		
		for(int i = 0; i < 4; i++){
			cin >> a[i];
		}
		
		for(int i = 0; i< sizeof(a)/sizeof(*a); i++){
			// 0이면 배 1이면 등 
			if(a[i] == 0){
				o++;
			}
			else{
				x++;
			}
			
		}
		
		if(o == 1 && x == 3){
			cout << "A" << "\n";
		}else if(o == 2 && x == 2){
			cout << "B" << "\n";
		}else if(o == 3 && x == 1){
			cout << "C" << "\n";
		}else if(o == 4){
			cout << "D" << "\n";
		}else if(x == 4){
			cout << "E" << "\n";
		}
	}
	
}