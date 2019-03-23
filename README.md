# jquery.codeIt

A simple jquery plugin that marks up code using css.

### Prerequisites

jquery 2.0.1


### Set up

Install the plugin, and use the following source code as an example. Basic use (using the default syntax), more examples can be found in the demo folder.

##### HTML
```
    <pre id="ex1" title="html"><code>
        <nav id="navigationMenu">
            <li><a href="#menuItem1">Home</a></li>
            <li><a href="#menuItem2">About</a></li>
            <li><a href="#menuItem3">More Info</a></li>
            <li><a href="#menuItem4">Contact</a></li>
        </nav>
    </code></pre>
```

##### javascript
```
    <script src="http://code.jquery.com/jquery-2.0.1.min.js"></script>
    <script src="src/jquery.codeIt.min.js"></script>
    <script src="src/syntax.min.js"></script>
    <script>
        $(function () {
            $('#ex1').codeIt();
        });
    </script>
```

##### css
```
    figure {
        border: #999999 1px solid;
    }
    .codeItTitle {
        background-color: #999999;
        color: #FFFFFF;
        padding: 4px;
    }
    .codeItGutter {
        background-color: #EDEDED;
        color: #999999;
        padding: 0 4px;
    }
    .htmlTag {
        color: #0000CC;
        font-weight: bold;
    }
    .htmlAttribute {
        color: #FF0000;
        font-weight: normal;
    }
    .htmlValue {
        color: #AA00CC;
    font-weight: bold;
    }
```
## Examples

View the examples in the demo folder. 

## Author

* **Gareth Cadwaladr** - *Initial work* - [gar-cad](https://github.com/gar-cad)

See also the list of [contributors](https://github.com/gar-cad/jquery.dataTree/graphs/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.MD) file for details