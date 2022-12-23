public class Shortcut extends Unit {
    Unit reference;

    public Shortcut(String entryName, Folder directory, int size, Unit reference) {
        super(entryName, directory, size);
        this.reference = reference;
    }

    public void openUnit() {
        reference.openUnit();
    }
}
