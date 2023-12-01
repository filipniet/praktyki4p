<?php
    mysqli_report(MYSQLI_REPORT_OFF);
    $db = @mysqli_connect('localhost','root','');
        $baza="cinemacritics";
        $table="movies";
        if (mysqli_select_db($db, $baza))
        {
        if (mysqli_query($db, "DESCRIBE $table")) {

            if (isset($_POST['title']) && $_POST['title'] != "") {
                $title = $_POST["title"];
            }
            if (isset($_POST['description']) && $_POST['description'] != "") {
                $description =$_POST['description'];
            }
            if (isset($_POST['genre']) && $_POST['genre'] != "") {
                $genre = $_POST['genre'];
            }

            $query = "INSERT INTO $table (`Tytul`, `Opis`, `gatunek`) VALUES ('$title', '$description', '$genre')";
            $result = mysqli_query($db, $query);

            if ($result) {
                echo "Film added successfully.";
            } else {
                echo "Error: " . $query . "<br>" . mysqli_error($db);
            }
        }
    }
    
    mysqli_close($db);
    header("Location: index.html");
    exit();
?>
