<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    if (isset($_POST['userText'])) {
        $userText = $_POST['userText'];

        // Lưu văn bản vào file (hoặc bạn có thể lưu vào database)
        $file = fopen("storedText.txt", "a");
        if ($file) {
            fwrite($file, $userText . "\n"); // Thêm văn bản vào file
            fclose($file);
            echo "Văn bản đã được lưu!";
        } else {
            echo "Không thể mở file để lưu văn bản!";
        }
    }
}
?>
