/**
 * Зависимый тип и extends
 */
{
    const getObjectProperty = <
        Source extends { a: number },
        PropName extends keyof Source
    >(
        source: Source,
        propName: PropName
    ) => {
        return source[propName];
    };

    const sourceObjectExample = {
        a: 20,
        b: "2",
        c: true,
    };

    // const aPropFromSource: number = getObjectProperty(sourceObjectExample, "a");
    // const aPropFromSourceAuto = getObjectProperty(sourceObjectExample, "a");
    // const aPropFromSourceError: boolean = getObjectProperty(
    //     sourceObjectExample,
    //     "a"
    // );

    // const dPropFromSource: boolean = getObjectProperty(
    //     sourceObjectExample,
    //     "d"
    // );
    // const badSource = getObjectProperty({ b: 5 }, "d");
}


/**
 * Зависимый тип посложнее
 */
{
    const deletePropertiesFromObject = <
        Source extends {},
        PropName extends keyof Source
    >(
        source: Source,
        deleteProps: PropName[]
    ): Omit<Source, PropName> => {
        deleteProps.forEach((key) => {
            delete source[key];
        });
        return source;
    };

    const sourceObjectExample = {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
    };

    const objectWithoutAB = deletePropertiesFromObject(sourceObjectExample, [
        "a",
        "b",
    ]);

    // console.log(objectWithoutAB.a);
    // console.log(objectWithoutAB.b);
    // console.log(objectWithoutAB.c);
    // console.log(objectWithoutAB.d);
}

/**
 * Дженерный интерфейс
 */
{
    interface AbstractIcon<Kind extends string = "default"> {
        size: 16 | 24 | 32;
        kind: Kind;
    }

    const defaultIcon: AbstractIcon = { size: 16, kind: "default" };
    const _defaultIcon: AbstractIcon<"loading"> = { size: 16, kind: "loading" };

    const removeIcon: AbstractIcon<"remove"> = { size: 24, kind: "remove" };

    // const _removeIcon: AbstractIcon<"remove"> = { size: 16, kind: "default" };
    // const __removeIcon: AbstractIcon<"remove"> = { size: 16, kind: "loading" };
}

/**
 * Дженерный класс
 */
{
    interface IPageDefaultState {
        pageName: string;
    }

    class Page<PageState extends {}> {
        fullPageState: IPageDefaultState & PageState;

        constructor(additionalPageState: PageState, pageName: string) {
            this.fullPageState = { pageName, ...additionalPageState };
        }
    }

    interface IVacancyPage {
        id: number;
        name: string;
        company: { name: string };
    }

    const vacancyPage = new Page<IVacancyPage>(
        {
            id: 1,
            name: "vacancy name",
            company: {
                name: "company name",
            },
        },
        "vacancy_view"
    );

    console.log(vacancyPage.fullPageState.company.name);
    console.log(vacancyPage.fullPageState.pageName);
}
