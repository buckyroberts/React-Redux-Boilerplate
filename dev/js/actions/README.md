# Actions

Actions are just things that happen _(seriously, that's it)_.
- most actions are user events (clicked a button, submitted a form, etc...)
- can also be other events such as an API call returning data

Actions are _(usually)_ made up of two parts


*type* - describes the action that occurred
```
ADD_USER_BUTTON_CLICKED
```


*payload* - _(optional)_ any extra data that is needed
```
{
    first: "Samantha",
    last: "Williams",
    age: 52,
    description: "Samantha is a good woman with a heart of gold."
}
```

## Actions vs Action Creators
