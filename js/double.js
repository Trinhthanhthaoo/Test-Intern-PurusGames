// player.js
class Player {
    constructor() {
        this.x = 50;
        this.y = 400; // Mức độ mặt đất
        this.velocityY = 0;
        this.isJumping = false;
        this.jumpCount = 0; // Khai báo biến theo dõi số lần nhảy
        this.maxJumps = 2; // Số lần nhảy tối đa
        this.jumpForce = 10; // Lực nhảy
        this.gravity = 0.5; // Trọng lực
    }

    jump() {
        if (this.jumpCount < this.maxJumps) {
            this.velocityY = -this.jumpForce;
            this.isJumping = true;
            this.jumpCount++;
        }
    }

    update() {
        // Cập nhật vị trí và trạng thái của người chơi
        this.y += this.velocityY;
        this.velocityY += this.gravity;

        // Kiểm tra va chạm với mặt đất
        if (this.y >= 400) {
            this.y = 400;
            this.velocityY = 0;
            this.isJumping = false;
            this.jumpCount = 0; // Đặt lại số lần nhảy khi chạm đất
        }
    }
}
