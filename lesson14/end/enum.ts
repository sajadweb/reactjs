enum PrintMedia {
    Newspaper,
    Newsletter,
    Magazine,
    Book
  }

  enum PrintMedia {
    Newspaper = 1,
    Newsletter,
    Magazine,
    Book
  }

  enum PrintMedia {
    Newspaper = 1,
    Newsletter = 5,
    Magazine = 5,
    Book = 10
}


enum PrintMedia {
    Newspaper = "NEWSPAPER",
    Newsletter = "NEWSLETTER",
    Magazine = "MAGAZINE",
    Book = "BOOK"
}
// Access String Enum 
PrintMedia.Newspaper; //returns NEWSPAPER
PrintMedia['Magazine'];//returns MAGAZINE