package Java.DataTypes;

public class incrementDrecrement {
  
  public static void main(String[] args) {
    
    int lives = 5;
    lives = lives - 1;
    System.out.println(lives);
    // *Drecrement
    lives--;
    System.out.println(lives);
    // *Increment
    lives++;
    System.out.println(lives);

    int gift = 100 + ++lives;
    System.out.println(gift);
  }
}
