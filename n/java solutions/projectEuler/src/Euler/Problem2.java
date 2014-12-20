package Euler;
import java.util.ArrayList;

public class Problem2 {
    private final int foMil = 4000000;
    private int before = 0;
    private int current = 1;
    private int after = 0; //fib number
    private int sumOfFibs = 0;
    private static Problem2 puzzleMaster;


    public static void main(String[] args){
        puzzleMaster = new Problem2();
        puzzleMaster.launch();

    }

    public void launch(){
        while(underFoMil()){
            after = current + before;
            before = current;
            current = after;
            if(isEvenNumber(after)) {
                sumOfFibs += after;
            }
        }
        System.out.println("Problem 2 Solution: " + sumOfFibs);
    }

    public boolean underFoMil(){
        return before < foMil && after < foMil;
    }

    public boolean isEvenNumber(int number){
        return number % 2 == 0;
    }
}
