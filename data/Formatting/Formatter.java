import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Arrays;
import java.util.ArrayList;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

class Formatter {
    final static String FILE_NAME = "inputFile.txt";
    final static String OUTPUT_FILE_NAME = "outputFile.txt";

    public static void main(String[] args) throws IOException {
        Formatter formatter = new Formatter();
        Path inputFile = Paths.get(FILE_NAME);
        Path outputFile = Paths.get(OUTPUT_FILE_NAME);

        try (
            BufferedReader input = Files.newBufferedReader(inputFile);
            BufferedWriter output = Files.newBufferedWriter(outputFile);
        ) {
            List<String> currentStyle = new ArrayList<String>();
            String currentLine = input.readLine();
            int lineNum = 0;

            while (currentLine != null) {
                if (!currentLine.isEmpty()) {
                    currentStyle.add(currentLine);
                } else {
                    createJsonEntry(currentStyle, output);
                    currentStyle.clear();
                }
                currentLine = input.readLine();
            }
            createJsonEntry(currentStyle, output);
            currentStyle.clear();
        }
    }

    public static void createJsonEntry(List<String> currentStyle, BufferedWriter output) throws IOException {
        JsonEntry style = new JsonEntry(currentStyle);
        List<String> entry = style.makeCssToAcssEntry();

        if (!entry.isEmpty()) {
            for (String line : entry) {
                output.write(line);
                output.newLine();
            }
            output.newLine();
        }
    }
}

class JsonEntry {
    String acssName;
    String cssName;
    List<String[]> modifiers = new ArrayList<String[]>();
    boolean isFuncStyle;
    boolean isMultiLine;
    List<String> text;

    public JsonEntry(List<String> text) {
        this.text = text;
        this.formatJsonEntry();
    }

    void formatJsonEntry() {
        Pattern acssNameFinder = Pattern.compile("(.*?)\\(");
        Pattern cssNameFinder = Pattern.compile("(.*?):");
        Pattern isFuncStyleFinder = Pattern.compile("(.*?)\\(");

        Matcher acssNameMatcher = acssNameFinder.matcher(text.get(0));
        Matcher cssNameMatcher = cssNameFinder.matcher(text.get(1));
        Matcher isFuncStyleMatcher = isFuncStyleFinder.matcher(text.get(1));

        isFuncStyle = isFuncStyleMatcher.find();
        isMultiLine = text.size() > 2 && cssNameFinder.matcher(text.get(2)).find();

        acssName = (acssNameMatcher.find() ? acssNameMatcher.group(1) : "");
        cssName = (isFuncStyle ? isFuncStyleMatcher.group(1) : (cssNameMatcher.find() ? cssNameMatcher.group(1) : ""));

        Pattern acssModifierFinder = Pattern.compile("\\((.*?)\\)");
        Pattern cssModifierFinder = Pattern.compile(": (.*$?)");
        if (!(text.size() % 3 == 0 && isMultiLine)) {
            for (int i = 2; i < text.size(); i += 2) {
                Matcher acssModifierMatcher = acssModifierFinder.matcher(text.get(i));
                Matcher cssModifierMatcher = cssModifierFinder.matcher(text.get(i+1));

                String[] entry = new String[2];

                entry[0] = (acssModifierMatcher.find() ? acssModifierMatcher.group(1) : "");
                entry[1] = (cssModifierMatcher.find() ? cssModifierMatcher.group(1) : "");

                modifiers.add(entry);
            }
        } else {
            System.out.println(acssName + " " + cssName);
        }
    }

    List<String> makeAcssToCssEntry() {
        List<String> entry = new ArrayList<String>();
        entry.add("\"" + acssName + "\": {");
        entry.add("\t\"style_name\": \"" + cssName + "\"" + ((!modifiers.isEmpty() || isFuncStyle) ? "," : "") + "");
        if (isFuncStyle) entry.add("\t\"isFuncStyle\": true"+(!modifiers.isEmpty() ? "," : ""));
        if (!modifiers.isEmpty()) {
            entry.add("\t\"modifiers\": {");
            for (String[] modifier : modifiers) {
                entry.add("\t\t\"" + modifier[0] + "\": \"" + modifier[1] + "\"" + ((modifiers.indexOf(modifier)!=modifiers.size()-1) ? "," : ""));
            }
            entry.add("\t}");
        }
        entry.add("},");
        return entry;
    }

    List<String> makeCssToAcssEntry() {
        List<String> entry = new ArrayList<String>();
        if (isMultiLine) return entry;
        entry.add("\"" + cssName + "\": {");
        entry.add("\t\"style_name\": \"" + acssName + "\"" + ((!modifiers.isEmpty() || isFuncStyle) ? "," : "") + "");
        if (isFuncStyle) entry.add("\t\"isFuncStyle\": true"+(!modifiers.isEmpty() ? "," : ""));
        if (!modifiers.isEmpty()) {
            entry.add("\t\"modifiers\": {");
            for (String[] modifier : modifiers) {
                entry.add("\t\t\"" + modifier[1] + "\": \"" + modifier[0] + "\"" + ((modifiers.indexOf(modifier)!=modifiers.size()-1) ? "," : ""));
            }
            entry.add("\t}");
        }
        entry.add("},");
        return entry;
    }
}
