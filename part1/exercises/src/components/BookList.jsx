export default function BookList() {
   let pageTitle = "Books I've Read";
   let book1 = "https://upload.wikimedia.org/wikipedia/en/e/ee/DoAndroidsDream.png";
   let book2 = "https://images-us.bookshop.org/ingram/9780679733782.jpg?height=500&v=v2https://images-us.bookshop.org/ingram/9780679733782.jpg?height=500&v=v2";
   let book3 = "https://runnersdiscourse.com/wp-content/uploads/2019/02/pdfbooksinfo.blogspot.com-born-to-run-by-christopher-mcdougall.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Do Androids Dream of Electric Sheep by Phillip K Dick" />
         <img src={book2} alt="The Woman in The Dunes by Kobo Abe" />
         <img src={book3} alt="Born to Run by Christopher McDougall" />
      </div>      
   );
}

