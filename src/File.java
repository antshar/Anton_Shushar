public class File extends Unit {

    private final int size;

    public File(String entryName, Folder directory, int size) {
        super(entryName, directory);
        this.size = size;
    }

    public int size() {
        return size;
    }

    private void openFile() {
        System.out.printf("Opened %s file%n", this.name);
    }

    public void openUnit(){
        openFile();
    }
}
