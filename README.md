
<img width="473" alt="code-no2" src="https://github.com/ariokt/ario-hitopia-pst/assets/56834891/f5f4e60a-9709-4b41-bb0b-f9d88c317eca">

Berapa ukuran kompleksitas kodinganmu? Jelaskan detail kompleksitas jawaban No.2, cantumkan di README Repo! 

**Kompleksitas Waktu**
Iterasi Melalui String (for (const char of brackets)): Fungsi melakukan satu kali iterasi melalui setiap karakter dalam string brackets. Jika panjang string adalah n, maka memerlukan waktu O(n). Pada setiap iterasi, kita melakukan operasi push atau pop pada stack. Operasi push dan pop pada kondisi if yang berbeda kompleksitas waktu O(1). Karena operasi push dan pop hanya dilakukan satu kali untuk setiap karakter dalam string, maka total operasi ini juga membutuhkan waktu O(n).

**Kesimpulan**
Jadi, keseluruhan kompleksitas waktu dari fungsi isBalanced adalah O(n), di mana n adalah panjang dari string brackets. Ini berarti waktu yang dibutuhkan untuk menjalankan fungsi ini bertambah secara linear dengan bertambahnya panjang string input oleh user.
