# Client #

## Dogmas ##
- No style can be page specific (eg. readmore.css)
- Divide everything into smaller style chunks/blocks like section.css using BEM
- Style concepts must avoid html contracts, except theme context.

## New feature decision tree ##
- Does it already exist in a similar shape on another page
  - Yes -> Adapt to use existing style block
  - No -> Is it simple and styling focused?
    - Yes -> Can you lift it to a semantic simple style concept?
      - yes -> A
      - no -> C
    - No -> Does it contain html restrictions, complex behavior, data constracts?
      - yes -> B
      - no -> C

A. Use existing/create new semantic style block
B. Create new self-contained component
C. Challenge design/product decision

## Style blocks ##
### Strengths ###
- Highly reusable
- Makes few assumptions about elements, structure

### Weaknesses ###
- Easy to cross-contaminate

## Web components ##
### Strengths ###
- Self-contained
- Encapsulated
- Simple drop-in in templates

### Weaknesses ###
- Hard to theme
- Duplication of styles
- Api contract/deprecation
