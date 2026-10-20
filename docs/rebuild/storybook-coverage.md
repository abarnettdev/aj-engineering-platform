# Storybook Coverage

Storybook loads the same `src/styles.css` token source as the application. Its preview also loads General Sans and JetBrains Mono so type, color, radius, focus, and spacing decisions match the live site.

| Area                | Default                      | Long content   | Loading          | Empty             | Success                  | Error                    | Responsive / keyboard                      |
| ------------------- | ---------------------------- | -------------- | ---------------- | ----------------- | ------------------------ | ------------------------ | ------------------------------------------ |
| Button              | Yes                          | Yes            | Disabled         | N/A               | N/A                      | Destructive              | Focus-visible contract test                |
| Input               | Yes                          | Long guidance  | Disabled         | Empty value       | Valid guidance           | Invalid guidance         | Label and description contract test        |
| Checkbox            | Yes                          | Long label     | Disabled         | Unchecked         | Checked                  | N/A                      | Native state contract test                 |
| Tabs                | Yes                          | Long labels    | N/A              | N/A               | Active panel             | N/A                      | Arrow-key guidance and ARIA contract test  |
| Card system         | Yes                          | Yes            | Skeleton content | Empty composition | Complete composition     | Error content            | Compact and comfortable density            |
| Project showcase    | Three sites                  | N/A            | N/A              | Single site       | Three authentic captures | N/A                      | Stacked mobile and layered desktop layouts |
| Ask A.J. experience | Ready                        | Long answer    | Streaming        | Starter state     | Completed answer         | Service error            | Reduced motion and keyboard composer       |
| Ask A.J. contact    | Ready                        | Long values    | Submitting       | Empty form        | Sent                     | Field and service errors | Connected labels and focus handling        |
| Ask A.J. launcher   | Yes                          | Yes            | N/A              | N/A               | N/A                      | N/A                      | Keyboard-visible focus                     |
| Mobile navigation   | Active route                 | Full link list | N/A              | N/A               | Open dialog              | N/A                      | Focus trap, close control, and route state |
| Foundations         | Color, type, spacing, motion | N/A            | N/A              | N/A               | N/A                      | N/A                      | Reduced-motion guidance                    |

Route files, server handlers, hooks, and orchestration code remain covered through application tests rather than isolated stories.
