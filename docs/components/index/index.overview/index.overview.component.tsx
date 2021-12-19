import { IndexOverviewStyle } from './index.overview.style';

export interface IndexOverviewI {

}

export function IndexOverviewComponent({ }: IndexOverviewI) {
    return(
        <IndexOverviewStyle>
            <div className="wrap">
                <h3>Why Printer?</h3>
                <p>Every front end project involves a lot of boilerplate. Printer reduces the need to spend time writing boilerplate to almost zero. The principle approach of Printer is to automate anything trivial in Next.js development.</p>
                <h3>How do you use Printer?</h3>
                <p>
                    Install it by running the command below. Then follow the <a href="https://github.com/ChrisCates/Printer/blob/master/CLI.md" target="guide">guide here.</a>

                </p>
                <div className="code">
npm install -g @chriscates/printer
                </div>
                <h3>Free to use</h3>
                <p>Just don't fork it and claim it as yours. Thank you.</p>
            </div>
        </IndexOverviewStyle>
    );
}
