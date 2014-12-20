package Euler;

public class Problem1 {
    private static Problem1 puzzleBeast;
    private int sum = 0;


    public static void main(String[] args){
        puzzleBeast = new Problem1();
        puzzleBeast.launch();
    }

    public void launch(){
        for(int i = 0; i < 1000; i++){
            if(multipleOfThreeOrFive(i)){
                sum += i;
            }
        }
        System.out.println("Problem 1 Solution: " + sum);
    }

    public boolean multipleOfThreeOrFive(int number){
        return number % 3 ==0  || number % 5 == 0;
    }
}
