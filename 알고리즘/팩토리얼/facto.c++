int facto(int n){
	if(n >= 0 && n <= 1) return 1;
	return n * facto(n - 1);
}

int main(){
	ios::sync_with_stdio(0);
	cin.tie(0);

	int ret = facto(5);
	cout << ret << "\n";
	
  return 0;
} 