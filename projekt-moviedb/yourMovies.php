<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add Film</title>
    <link rel="stylesheet" href="styles/yourMovies.css">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Oswald">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Ubuntu">
  <link rel="shortcut icon" type="image/x-icon" href="images/logo.png"/>
  <script src="scripts/script.js"></script>
  <script src="scripts/apiService.js"></script>
  <script src="scripts/validationUtils.js"></script>
</head>
<body>
    <div class="title">
        <img id="logo" src="images/logo.png">
        <h1 id="name">CINEMA CRITICS</h1>
        <button onclick="gotoMain()" id="btn">BACK</button>
    </div>

    <?php
    mysqli_report(MYSQLI_REPORT_OFF);
    $db = @mysqli_connect('localhost','root','');
        $baza="cinemacritics";
        $table="movies";
        if (mysqli_select_db($db, $baza))
        {
        if (mysqli_query($db, "DESCRIBE $table")) {
            $query = "Select Tytul, Opis, gatunek from $table;";
            $result = mysqli_query($db, $query);
            echo'<table>
            <tr><th colspan="3">Your movies</th></tr>
            <tr>
            <td>Tytul</td><td>Opis</td><td>Gatunek</td>
            </tr>';
            while($row = $result->fetch_assoc() ){
                echo '<tr>';
                echo '<td>'.$row['Tytul'].'</td>';
                echo '<td>'.$row['Opis'].'</td>';
                echo '<td>'.$row['gatunek'].'</td>';
                echo '</tr>';
        }
        echo '<tr>';
        echo'<th colspan="3">Your Movies</th> 
        </table>';
    }
}
mysqli_close($db);
    ?>
