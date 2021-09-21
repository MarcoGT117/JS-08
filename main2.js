class Book{
  constructor(Título, Género, Autor, Leído, FechaLeído){
    this._Título = Título;
    this._Género = Género;
    this._Autor = Autor;
    this._Leído = Leído;
    this._FechaLeído = FechaLeído;
    }
    
  get Título(){
      return this._Título;
  }

  set Título(Título){
      this._Título = Título;
  }

  get Género(){
      return this._Género;
  }
  
  set Género(Género){
      this._Género = Género;
  }

  get Autor(){
      return this._Autor;
  }
  
  set Autor(Autor){
      this._Autor = Autor;
  }

  get Leído(){
      return this._Leído;
  }
  
  set Leído(Leído){
      this._Leído = Leído;
  }

  get FechaLeído(){
      return this._FechaLeído;
  }
  
  set FechaLeído(FechaLeído){
      this._FechaLeído = FechaLeído;
  }

    dataList(){
      return 'Título: '+this._Título+'<br>'+'Género: '+this._Género+'<br>'+'Autor: '+this._Autor+'<br>' 
      +'Leído: '+this._Leído+'<br>'
      +'Fecha: '+this._FechaLeído;
    }
};

// Lista de libros
const libro1 = new Book("Titulo 1", "Terror", "Autor1", true, new Date("2021,09,13"));
const libro2 = new Book("Titulo 2", "Accion", "Autor2", false, "");
const libro3 = new Book("Titulo 3", "Ficcion", "Autor3", true, new Date("2021,08,03"));
const libro4 = new Book("Titulo 4", "Romance", "Autor4", false, "");
const libro5 = new Book("Titulo 5", "Suspenso", "Autor5", false, "");

/* const newBook = Object.create(libro6);
newBook.title = "Titulo 6";
newBook.genre = "Comedia";
newBook.author = "Autor 6";
newBook.read = false;
newBook.readDate = "";
 */

/* 
// Lista de libros en JSON
const libro1JSON = JSON.stringify(libro1);
const libro2JSON = JSON.stringify(libro2);
const libro3JSON = JSON.stringify(libro3);
const libro4JSON = JSON.stringify(libro4);
const libro5JSON = JSON.stringify(libro5);
 */

// Imprimir los datos de los  libros 
function displayBooks() {
    document.getElementById("salida1").innerHTML = libro1.dataList();
    document.getElementById("salida2").innerHTML = libro2.dataList();
    document.getElementById("salida3").innerHTML = libro3.dataList();
    document.getElementById("salida4").innerHTML = libro4.dataList();
    document.getElementById("salida5").innerHTML = libro5.dataList();
};

function hideBooks(){
  document.getElementById("salida1").innerHTML = "";
  document.getElementById("salida2").innerHTML = "";
  document.getElementById("salida3").innerHTML = "";
  document.getElementById("salida4").innerHTML = "";
  document.getElementById("salida5").innerHTML = "";
}

// Parte 2
/* 
In your Javascript file - create a class BookList.

BookLists should have the following properties:

    Number of books marked as read
    Number of books marked as not read yet
    A reference to the next book to read (book object)
    A reference to the current book being read (book object)
    A reference to the last book read (book object)
    An array of all the Books

Every Booklist should have a few methods:

    .add(book)
        should add a book to the books list.
    .finishCurrentBook()
        should mark the book that is currently being read as "read"
        Give it a read date of new Date(Date.now())
        Change the last book read to be the book that just got finished
        Change the current book to be the next book to be read
        Change the next book to be read property to be the first unread book you find in the list of books

*/
var i = 0;

class BookList {
  constructor(){
    this._Books = [];
  }
  Read(){
    var cont = 0;
    for(let i=0; i<this._Books.length; i++){
      if(this._Books[i]._Leído === true){
        cont++;
      }
    }
    return cont;
  }
  NotRead(i){
    return this._Books.length-i;
  }
  NextBook(){
    let j = i+1;
    while(j < this._Books.length){
      if(this._Books[j]._Leído !== false){
        i++;
      }else{
        return this._Books[j];
      }
      j++;
    }
  }
  CurrentBook(){
    while(this._Books[i]._Leído !== false){
      i++;
    }
    return this._Books[i];
  }
  LastBook(){
    return this._Books[this._Books.length-1];
  }
  add(Book){
    this._Books.push(Book);
  }
  finishCurrenBook(vari){
    //console.log(vari)
    vari._Leído = true;
    vari._FechaLeído = Date.now();
  /*   document.getElementById("libro1").innerHTML = libro1.dataList();
    document.getElementById("libro2").innerHTML = libro2.dataList();
    document.getElementById("libro3").innerHTML = libro3.dataList();
    document.getElementById("libro4").innerHTML = libro4.dataList();
    document.getElementById("libro5").innerHTML = libro5.dataList(); */
  }
}
let booklist = new BookList();
booklist.add(libro1);
booklist.add(libro2);
booklist.add(libro3);
booklist.add(libro4);
booklist.add(libro5);

console.log(booklist._Books);

var act = booklist.Read();

function printRead(){
  document.getElementById("leido").innerHTML = ("Cantidad de libros leidos: " + act);
};

  console.log("Cantidad de libros leidos: ",act);

console.log("Cantidad de libros no leidos: ",booklist.NotRead(act));

console.log("Libro que lees actualmente: ",booklist.CurrentBook()._Título);

console.log("Libro siguiente: ",booklist.NextBook()._Título);

console.log("Ultimo libro de tu Booklist: ",booklist.LastBook().Título);

booklist.finishCurrenBook(booklist.CurrentBook());

console.log(booklist._Books);

console.log("Libro que lees actualmente: ",booklist.CurrentBook()._Título);

console.log("Libro siguiente: ",booklist.NextBook()._Título);

console.log("Ultimo libro de tu Booklist: ",booklist.LastBook().Título);
