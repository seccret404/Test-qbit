type IFruit = {
     fruitId: number;
     fruitName: string;
     fruitType: 'IMPORT' | 'LOCAL';  //interface
     stock: number;
   };
   
  //data
   const fruits: IFruit[] = [
     { fruitId: 1, fruitName: 'Apel', fruitType: 'IMPORT', stock: 10 },
     { fruitId: 2, fruitName: 'Kurma', fruitType: 'IMPORT', stock: 20 },
     { fruitId: 3, fruitName: 'apel', fruitType: 'IMPORT', stock: 50 },
     { fruitId: 4, fruitName: 'Manggis', fruitType: 'LOCAL', stock: 100 },
     { fruitId: 5, fruitName: 'Jeruk Bali', fruitType: 'LOCAL', stock: 10 },
     { fruitId: 6, fruitName: 'KURMA', fruitType: 'IMPORT', stock: 20 },
     { fruitId: 7, fruitName: 'Salak', fruitType: 'LOCAL', stock: 150 }
   ];
   
   //mencari buah (tanpa duplikasi, case insensitive)
   const uniqueFruits = Array.from(new Set(fruits.map(f => f.fruitName.toLowerCase())));
   console.log("1. buah yang dimiliki Andi:", uniqueFruits);
   
   //mencari buah berdasarkan tipe
   const fruitByType = {
     IMPORT: fruits.filter(f => f.fruitType === 'IMPORT').map(f => f.fruitName),
     LOCAL: fruits.filter(f => f.fruitType === 'LOCAL').map(f => f.fruitName)
   };
   console.log("2. Wadah yang dibutuhkan: ", Object.keys(fruitByType));
   console.log("Buah dalam masing-masing wadah:", fruitByType);
   
   //total stock per tipe buah
   const totalStock = {
     IMPORT: fruits.filter(f => f.fruitType === 'IMPORT').reduce((sum, f) => sum + f.stock, 0),
     LOCAL: fruits.filter(f => f.fruitType === 'LOCAL').reduce((sum, f) => sum + f.stock, 0)
   };
   console.log("3. Total stock per wadah:", totalStock);
   
   // 4. Komentar terkait kasus
  //  console.log("4. Komentar terkait kasus:");
  //  console.log("- Ada variasi penulisan nama buah ('Apel' vs 'apel' vs 'KURMA'), sebaiknya distandarisasi.");
  //  console.log("- Terdapat duplikasi `fruitId` (contoh: fruitId 5 muncul beberapa kali), sebaiknya diperbaiki.");
  //  console.log("- Gunakan format `fruitName.toLowerCase()` untuk menghindari perbedaan kapitalisasi.");
   