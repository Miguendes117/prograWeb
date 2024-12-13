<?php
include 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $data = json_decode(file_get_contents('php://input'), true);

    foreach ($data['productos'] as $producto) {
        $productId = $producto['product_id'];
        $cantidadComprada = $producto['cantidad_comprada'];

        // Actualiza el stock en la base de datos
        $sql = "UPDATE productos SET stock = stock - ? WHERE id = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("ii", $cantidadComprada, $productId);
        $stmt->execute();
    }

    $stmt->close();
    $conn->close();

    echo "Stock actualizado exitosamente.";
}
?>
