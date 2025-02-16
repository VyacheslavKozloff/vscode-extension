import * as vscode from 'vscode';
import { MyModule } from './module/my-module';

export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "esbuild-test" is now active!');

	const my_module: MyModule = new MyModule('module');

	const disposable = vscode.commands.registerCommand('esbuild-test.helloWorld', () => {
		vscode.window.showInformationMessage(`Hello World from esbuild-test module: ${my_module.name}!`);
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
