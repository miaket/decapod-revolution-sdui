import componentArchitect from './core/builder/componentArchitect';

export default async function mdrNgin(payload) {
  let reactElementChildren = [];

  for (const child of componentChildrenGetter(payload)) {
    reactElementChildren.push(await mdrNgin(child));
  }

  // "break case"
  return await componentArchitect(
    componentTypeGetter(payload),
    componentNameGetter(payload),
    componentPropsGetter(payload),
    componentActionsGetter(payload),
    reactElementChildren,
  );
}

function componentTypeGetter(componentStructure) {
  const { type } = componentStructure;
  if (type) return type;
  return '';
}

function componentNameGetter(componentStructure) {
  const { component } = componentStructure;
  if (component) return component;
  return '';
}

function componentPropsGetter(componentStructure) {
  const { props } = componentStructure;
  if (props) return props;
  return '';

}

function componentActionsGetter(componentStructure) {
  const { actions } = componentStructure;
  if (actions) return actions;
  return '';
}

function componentChildrenGetter(componentStructure) {
  const { parameters } = componentStructure;
  if (parameters) return parameters;
  return '';
}